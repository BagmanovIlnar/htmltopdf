import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { postParam } from './dto/postParam';
import { generatePDFService } from './generate-pdf.service';
const puppeteer = require('puppeteer');
global.browser = puppeteer.launch();

@Controller('generate-pdf')
export class GeneratePdfController {
    constructor(private readonly genPDFService: generatePDFService) {}
    @Post()
    @Header('Content-type', 'application/pdf')
    @Header('Content-Disposition', 'attachment; filename=report.pdf')
    getPDF(@Body() generatePDF : postParam) {
        return this.genPDFService.getPDF("",generatePDF);
    }
}

