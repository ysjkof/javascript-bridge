/*
 * 제공된 OutputView 객체를 활용해 구현해야 한다.
 * OutputView의 파일 경로는 변경할 수 있다.
 * OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 값 출력을 위해 필요한 메서드를 추가할 수 있다.
 */

const { Console } = require("@woowacourse/mission-utils");
const ResultMessageCreator = require("../utils/ResultMessageCreator");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(result) {
    Console.print(OutputView.createMessageForMap(result));
  },

  createMessageForMap(result) {
    const up = ResultMessageCreator.generate(result.up);
    const down = ResultMessageCreator.generate(result.down);
    return `${up}\n${down}\n`;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ up, down, win, tryCount }) {
    const messages = [
      "최종 게임 결과",
      `${OutputView.createMessageForMap({ up, down })}`,
      `게임 성공 여부: ${win ? "성공" : "실패"}`,
      `총 시도한 횟수: ${tryCount}`,
    ];
    Console.print(`${messages.join("\n")}`);
    Console.close();
  },

  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  printError(text) {
    Console.print(`\n[ERROR] ${text}\n`);
  },

  printEmptyLine() {
    Console.print("");
  },
};

module.exports = OutputView;
