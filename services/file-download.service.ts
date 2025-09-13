import { IFileDownloadService } from './interfaces';

export class FileDownloadService implements IFileDownloadService {
  downloadFile(filePath: string, fileName: string): void {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}