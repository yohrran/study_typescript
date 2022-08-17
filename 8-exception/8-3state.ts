{
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success;";
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
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
        console.log("error catched!!");
      }
    }
  }

  const app = new App(services);
  app.run();
}
