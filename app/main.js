import SandboxController from "./Controllers/SandboxController.js";
import SongsController from "./Controllers/SongsController.js";

class App {
  songsController = new SongsController();
  sandboxController = new SandboxController();
}

window["app"] = new App();
