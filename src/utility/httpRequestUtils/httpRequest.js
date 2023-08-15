
//getCall
export const getCall= async (url)=>{
   try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return await response.json();
    } catch (error) {
        throw error
    }
}

//postCall
//putCall