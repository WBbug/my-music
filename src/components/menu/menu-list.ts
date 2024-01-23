export interface MenuItem{
    name:string;
    key:string;
    icon?:string
}

export const MemuList:MenuItem[] =[{
    name:'发现音乐',
    key:'discovery',
    icon:'VideoPlay'
},{
    name:'最新 MV',
    key:'latestMV',
    icon:'VideoPlay'
}] 