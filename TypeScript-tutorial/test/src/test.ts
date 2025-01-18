export const test = () => {

    const name: string = 'Mike'; // string
    const age: number = 25; // number
    const isStudent: boolean = false; // boolean
    const hobbies: string[] = ["Reading", "Coding", "Gaming"]; // array
    const address: object = {
        street: "123 Main St",
        city: "Los Angeles",
        state: "CA",
    }; // object
    const today:Date = new Date(); //date
    const none: null = null; // null
    const notDefined: undefined = undefined; // undefined
    const random: any = "Hello World"; //any
    const gender: "male" | "female" = "male"; // union
    const value: string | number | null = "Hello World"; // union

    // 問題：引数に文字列の配列を受け取り、その中身の順番を逆にして返す関数を作成する
    // 例：reverseArray(["a", "b", "c"]) => ["c", "b", "a"]
    // 実際にデータ型を定義してみよう：変数、引数、返り値
    //                                        ↓ オプション引数  ↓　返り値の型！！！
    const reverseArray = (arr:string[], hasTom?:boolean): string[] => {
        const reversedArray:string[] = [];
        let index:number = arr.length - 1; // 計算結果は 2 なので、index の初期値は 2でCが配列に入る
        while(index >= 0) {
            reversedArray.push(arr[index]);
            index--;
        }

        if (hasTom) {
            reversedArray.push("Tom");
        }

        return reversedArray;
    }　

    console.log(reverseArray(["a", "b", "c"], true));


    // オブジェクトに対しても一括で型の設定が可能
    const user = {
        userId: 1,
        name: "Mike",
        age: 25,
        email: "mike@gmail.com",
        isActive: true,
    }

    // これ 「インターフェース」
    interface UserProps {
        userId: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;
    }

    // 上記インターフェースから少しだけ加えたいとき
    interface AdminUser extends UserProps {
        role: string; // 例えばadmin,leader,managerなど
    }

    type UserProps = {
        userId: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;
    }

    // インターフェースの書き方とにたようなタイプと言う書き方もある
    type AdminUserProps = UserProps & {
            role: string; // 例えばadmin,leader,managerなど
    }

    const createAccount = (accountInfo: AdminUserProps) => {
        // コード省略
    }

    createAccount({
        userId: 1,
        name: "Mike",
        age: 25,
        email: null,
        isActive: true,
    })

    class User {
        // プロパティ 型の指定はこの位置
        name: string;
        age: number;
        email: string;
        isActive: boolean;

        // コンストラクタ
        constructor(name: string, age: number, email: string, isActive: boolean) {
            this.name = name;
            this.age = age;
            this.email = email;
            this.isActive = isActive;

            this.getProfile();
        }

        // メソッド
        private getProfile(): string {
            return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Active: ${this.isActive}`;
        }

        // 静的メソッド, インスタンスを作らなくても呼び出せる
        static sayHelloWorld(): void {
            console.log("Hello World");
        }
    }

    // ジェネリクスについて

    // まず普通のTypeScriptの型指定
    const foo = (arg:string):string => {
        return arg;
    }

    // ジェネリクスを使った型指定,下記の時点ではまだ型が決まっていない
    const foo = <T>(arg: T) : T => {
        return arg;
    }

    // 型を指定、この時点で型が決まる
    foo<string>("Hello World");

    // null合体演算子について(??のところ)
    const fetchUserDate = async () => {
        const response = await fetch("https://api.github.com/users/mike", {
        userId: 1,
    });
    return response.data.status; // true, false, null, undefined
    }

    const isActive: boolean = fetchUserDate() ?? false;

    // オプショナルチェイニングについて(?.のところ)(オブジェクトのプロパティが存在しない場合でもエラーを回避できる)
    const fetchUserDate = async () => {
        const response = await fetch("https://api.github.com/users/mike", {
        userId: 1,
    });
    return response.data;
    }

    const userInfoData = fetchUserDate();
    {
        userId: 1,
        name: "Mike",
        age: 25,
        email: "mike@gmail.com",
        family: {
            father: "Tom",
            mother: "Jane",
        }
    }

    const fatherName = userInfoData?.family?.father ?? "No Father";

    // TypeScriptの学習方法について
    // -VScodeで飛ぶ ※わけわからんところはコマンドを押しながらクリックで飛べるので、飛んでみる
    // -ChatGPTに変換してもらう
    // -エラーをよく読む※型に関するエラーがおおいので、エラーを読んで理解する
    // -こまったらとりあえずany

}