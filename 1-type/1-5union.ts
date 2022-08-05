{
  /**
   * Union Types: OR 을 뜻한다
   */
  type Direction = "left" | "right" | "up" | "down";
  function movie(direction: Direction): void {
    console.log(direction);
  }

  movie("up");

  type TileSize = 8 | 16 | 32;
  // 위의 타입 중 하나만 할당 가능하다
  const title: TileSize = 8;

  //function: login -> success, fail
  type IsSuccess = "success" | "fail";

  function login(check): IsSuccess {
    console.log(check);
    return "success";
  }

  login("123");
  type Success = {
    response: {
      body: "성공";
    };
  };

  type Fail = {
    reason: {
      body: "실패";
    };
  };

  type LoginState = Success | Fail;

  // function printLoginState(state: LoginState) {
  //   if ("reason" in state) {
  //     console.log(state.reason.body);
  //   } else {
  //     console.log(state.response.body);
  //   }
  // }
}
