import * as fs from "node:fs/promises";
import path from "node:path";

const constants = {
  // defaultPath:["src", "db", "m-01"],
  filePath: path.resolve("src", "db", "m-01", "test.txt"),
  filePathJson: path.join(process.cwd(), "src", "db", "m-01", "test.json"),
  filePathWrite: path.join(process.cwd(), "src", "db", "m-01", "output.txt"),
  filePathOld: path.join(process.cwd(), "src", "db", "m-01", "oldfile.txt"),
  filePathOldJson: path.join(process.cwd(), "src", "db", "m-01", "oldfile.json"),
  filePathNew: path.join(process.cwd(), "src", "db", "m-01", "newfile.txt"),
};

const content = await fs.readFile(constants.filePath);
// console.log("====================================");
// console.log("Hello, World!");
// console.log("====================================");
console.log("====================================");
console.log("0.", content.toString("utf-8"));
console.log("====================================");

(async () => {
  try {
    const data = await fs.readFile(constants.filePathJson, "utf8");
    console.log("1. Вміст файлу:", JSON.parse(data));
    // const data1 = await fs.readFile(filePathWrite, "utf8");
    // console.log("1.1 Вміст файлу:", data1);
  } catch (err) {
    console.error("Помилка читання файлу:", err);
  }
})();

// Записуємо дані у файл 'output.txt'
(async () => {
  const data = "Це дані, які ми записуємо у файл.\n";
  try {
    await fs.writeFile(constants.filePathWrite, data, "utf8");
    console.log("2. Дані успішно записані у файл.");
  } catch (err) {
    console.error("Помилка запису у файл:", err);
  }
})();
(async () => {
  const data = "Це дані, які ми записуємо у файл.";
  try {
    await fs.writeFile(constants.filePathOld, data, "utf8");
    console.log("2.1 Дані успішно записані у старий файл.", data);
  } catch (err) {
    console.error("Помилка запису у файл:", err);
  }
})();
(async () => {
  const dataJson = JSON.stringify({ name: "John Doe", age: 30 }, undefined, 2);
  try {
    await fs.writeFile(constants.filePathOldJson, dataJson);
    console.log("2.2 Дані успішно записані у старий файл.");
  } catch (err) {
    console.error("Помилка запису у файл:", err);
  }
})();

// Додаємо дані до файлу 'output.txt'
(async () => {
  const data = "Це дані, які ми додаємо до файлу.\n";
  try {
    await fs.appendFile(constants.filePathWrite, data, "utf8");
    console.log("3. Дані додані до файлу.", data);
  } catch (err) {
    console.error("Помилка додавання даних до файлу:", err);
  }
})();

// Перейменовуємо або переміщуємо файл чи каталог зі шляху 'oldfile.txt' до 'newfile.txt'
(async () => {
  try {
    await fs.rename(constants.filePathOld, constants.filePathNew);
    console.log("4. Файл або каталог успішно перейменовано або переміщено.");
  } catch (err) {
    console.error("Помилка перейменування або переміщення:", err);
  }
})();

// Видаляємо файл за шляхом 'file.txt'
// (async () => {
//   try {
//     await fs.unlink(constants.filePathWrite);
//     console.log("5. Файл успішно видалено.");
//   } catch (err) {
//     console.error("Помилка видалення файлу:", err);
//   }
// })();

// Отримуємо список файлів і каталогів у поточному каталозі
// (async () => {
//   try {
//     const files = await fs.readdir("./src");
//     console.log("6. Список файлів і каталогів:", files);
//   } catch (err) {
//     console.error("Помилка отримання списку файлів і каталогів:", err);
//   }
// })();

// Перевіряємо доступність файлу або каталогу за вказаним шляхом
// constants.map((cons) =>
//   (async () => {
//     try {
//       await fs.access(cons);
//       console.log(`7. Файл або каталог '${constants.filePath}' доступний.`);
//     } catch (err) {
//       if (err.code === "ENOENT") {
//         console.log(`Файл або каталог '${constants.filePath}' не існує.`);
//       } else {
//         console.error(
//           `Помилка перевірки доступності файлу або каталогу '${filePath}':`,
//           err
//         );
//       }
//     }
//   })()
// );
