window.onload =()=>{
   fetch("http://127.0.0.1:4000/data")
     .then(response=>response.json())
     .then(data=>showdata(data));
}

/*function fetch_branch_data(){
    fetch("json_files/")
}*/