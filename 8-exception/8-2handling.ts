class TimeoutError extends Error {}
class OfflineError extends Error {}

class NetworkClient {
  tryConnect(): void {
    throw new TimeoutError("no network!");
  }
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
