import HttpMethod from './HttpMethod';
import HttpHeader from './HttpHeader';
import AppSettings from './AppSetting';

export class BaseStore {

    public appSetting = new AppSettings();
    private defaultContentType: string = 'application/json';

    constructor() {
        // initilize
        this.loadAppSetting();
    }

    public async loadAppSetting() {
        this.appSetting = await this.doRequest<AppSettings>('/data.json', HttpMethod.GET);
    }

    public async doRequest<T>(url: string, 
                              method: HttpMethod, 
                              content?: {}, 
                              contentType: string = this.defaultContentType): Promise<T> {
        let options: HttpHeader = new HttpHeader();
        options.method = method;
        let response = await fetch(url, options);
        return await response.json();
    }
}

export default BaseStore;