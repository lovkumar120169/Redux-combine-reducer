export const get_local_storage=(key)=>{
   let temp= localStorage.getItem(key)
   return +temp
}


export const set_local_storage=(key,value)=>{
    localStorage.setItem(key, JSON.stringify(value))
}