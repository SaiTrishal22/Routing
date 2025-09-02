export async function fetchCasesData({page, size, search}){
    try{
        const res = await fetch(`${import.meta.env.VITE_CASES_API}?page=${page}&page_size=${size}&search_string=${search}`,{
        method: "GET",
        headers:{
            "Content-type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImlhdCI6MTc1NjQ2MDE5MSwiZXhwIjoxNzU5MDUyMTkxfQ.C4Pd86pC0tJmcrdA0dqgrR7TkTomNjYCUgZa7M24Mck`,
            }
        });
        if(!res.ok) throw new Error("Cases data Not Found");
        return res.json();

    }catch(err){
        console.log(`Error in data fetching: ${err}`);
    }
}
