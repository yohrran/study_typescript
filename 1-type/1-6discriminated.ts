{
  type Success = {
    result: true;
    response: {
      body: "성공";
    };
  };

  type Fail = {
    result: false;
    reason: {
      body: "실패";
    };
  };

  type LoginState = Success | Fail;

  function printLoginState(state: LoginState) {
    if (!state.result) {
      console.log(state.reason.body);
    } else {
      console.log(state.response.body);
    }
  }
}
