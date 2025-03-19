export class UserEntity {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
    public statusId: number,
    public createdDate: string,
    public updateDate: string | null
  ) {}
}
