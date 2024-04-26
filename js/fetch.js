import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-ghaida2024-10da574be531.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}