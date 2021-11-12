import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneratePdfController } from './generate-pdf/generate-pdf.controller';
import { generatePDFService } from './generate-pdf/generate-pdf.service';

@Module({
  imports: [],
  controllers: [AppController, GeneratePdfController],
  providers: [AppService, generatePDFService],
})
export class AppModule {}
