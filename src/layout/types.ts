export interface INavItem {
  idx: number
  title: string
  icon: React.ReactNode
  children: INavItemChildren[]
}

export interface INavItemChildren {
  id: number
  name: string
  url: string
}
