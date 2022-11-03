export interface IpasswordForm {
  password: string
}

export interface Iscript {
  code: string
  title: string
  id?: string
}

export interface IscriptQueryData {
  attributes: Iscript
  id: string
}
