{
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success;";
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {}

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {}
  }

  const client = new NetworkClient();
  const services = new UserService(client);

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
        //typescript 에서 catch(error)는 any타입이다.
      } catch (error) {
        console.log("error catch!!");
      }
    }
  }

  const app = new App(services);
  app.run();
}
