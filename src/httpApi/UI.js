export const apiUI = {

    async getMenu(){
        let response = await fetch('https://services-ten.vercel.app/menu')
        return response
    }


}