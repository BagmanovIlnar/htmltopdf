import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { postParam } from './dto/postParam';
import { v4 as uuidv4 } from 'uuid';
const os = require('os');
const path = require('path');
import * as fs from 'fs';
@Injectable()
export class generatePDFService {

    async getPDF(location = '', generatePDF : postParam): Promise<Buffer> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        let html = generatePDF.html;
        let param = {};
        if(generatePDF.scale){
            param['scale'] = generatePDF.scale;
        }
        if(generatePDF.displayHeaderFooter){
            param['displayHeaderFooter'] = generatePDF.displayHeaderFooter;
        }
        if(generatePDF.headerTemplate){
            param['headerTemplate'] = generatePDF.headerTemplate;
        }
        if(generatePDF.footerTemplate){
            param['footerTemplate'] = generatePDF.footerTemplate;
        }
        if(generatePDF.printBackground){
            param['printBackground'] = generatePDF.printBackground;
        }
        if(generatePDF.landscape){
            param['landscape'] = generatePDF.landscape;
        }
        if(generatePDF.pageRanges){
            param['pageRanges'] = generatePDF.pageRanges;
        }
        param['format'] = generatePDF.format||"A4";
        page.setContent(html);
        let tmp = path.join(os.tmpdir(),uuidv4()+'.pdf');
        param['path'] = tmp;
        await page.pdf(param);
        await browser.close();
        const pdf = await new Promise<Buffer>((resolve, reject) => {
            fs.readFile(tmp, {}, (err, data) => {
              if (err) reject(err)
              else resolve(data)
            })
          });
          fs.unlinkSync(tmp);
          return pdf;
      }
}
