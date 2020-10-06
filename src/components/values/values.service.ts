import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface ValuesReturn {
    code: string,
    codein: string,
    name: string,
    high: string,
    low: string,
    varBid: string,
    pctChange: string,
    bid: string,
    ask: string,
    timestamp: string,
    create_date: string
}

@Injectable()
export class ValuesService {

    private http: HttpClient

    constructor(http: HttpClient) {
        this.http = http
    }

    async getValues() {
        const ret: ValuesReturn[] = [];

        const res = await this.http.get(`https://economia.awesomeapi.com.br/json/all`).toPromise()

        Object.values(res).forEach(value => {
            ret.push({
                code: value.code,
                codein: value.codein,
                name: value.name,
                high: value.high,
                low: value.low,
                varBid: value.varBid,
                pctChange: value.pctChange,
                bid: value.bid,
                ask: value.ask,
                timestamp: value.timestamp,
                create_date: value.create_date
            })
        })

        return ret;
    }
}