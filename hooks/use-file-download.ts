import { useCallback } from 'react';
import { FileDownloadService } from '@/services';

export function useFileDownload(fileDownloadService: FileDownloadService) {
  const downloadFile = useCallback((filePath: string, fileName: string) => {
    fileDownloadService.downloadFile(filePath, fileName);
  }, [fileDownloadService]);

  return { downloadFile };
}