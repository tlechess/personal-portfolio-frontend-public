export class Email {
    name: string = "";
    email: string = "";
    subject: string = "";
    body: string = "";

    constructor(name: string, email: string, subject: string, body: string) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.body = body;
    }
}