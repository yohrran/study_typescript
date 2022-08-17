// Java: Exception
// JavaScript: Error

//Error(Exception) handling: try => catch => finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  //
}

const fileName = "not exist!";

function run() {
  try {
    console.log(readFile(fileName));
    //catch 문으로 인해 에러를 잡고, 앱이 죽지 않는다.
  } catch (error) {
    console.log(`catch!!`);
    return;
  } finally {
    //에러가 catch 되도, finally는 실행된다.
    closeFile(fileName);
    console.log("closed!");
  }
}

run();
