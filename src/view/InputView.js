/*
 * 제공된 InputView 객체를 활용해 구현해야 한다.
 * InputView의 파일 경로는 변경할 수 있다.
 * InputView의 메서드의 인자는 변경할 수 있다.
 * 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */

const { Console } = require("@woowacourse/mission-utils");
const ExceptionHandler = require("../utils/ExceptionHandler");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(controller) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (size) => {
      try {
        ExceptionHandler.checkBridgeSize(size);
        controller.setupGame(size);
        controller.readMoving();
      } catch (error) {
        OutputView.printError(error);
        controller.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(controller) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (direction) => {
        try {
          ExceptionHandler.checkDirection(direction);
          controller.move(direction);
        } catch (error) {
          OutputView.printError(error);
          controller.readMoving();
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(controller) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (command) => {
        try {
          ExceptionHandler.checkGameCommand(command);
          controller.tryOfExit(command);
        } catch (error) {
          OutputView.printError(error);
          controller.readGameCommand();
        }
      }
    );
  },
};

module.exports = InputView;
