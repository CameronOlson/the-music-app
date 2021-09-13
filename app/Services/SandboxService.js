import { ProxyState } from "../AppState.js"
import { sandBoxApi } from "./AxiosService.js"


class SandboxService{

    async addToPlaylistSongs(id){
        const res = await sandBoxApi.post('', ProxyState.currentSong)
        console.log ('This is from the sandbox service', res.data)
        
    }



    
}

export const sandboxService = new SandboxService