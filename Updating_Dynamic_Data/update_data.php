<?php
  function download_remote_file($file_url, $save_to)
  {
    $content = file_get_contents($file_url);
    file_put_contents($save_to, $content);
  }

  download_remote_file('http://www.boi.org.il//he/DataAndStatistics/Lists/BoiTablesAndGraphs/itrchovh.xls', realpath("./xls_data") . '/overdraft.xls');

  require_once('PHPExcel/Classes/PHPExcel.php');
   
  //Usage:
  convertXLStoCSV('xls_data/overdraft.xls','../data/overdraft.csv');
   
  function convertXLStoCSV($infile,$outfile)
  {
      $fileType = PHPExcel_IOFactory::identify($infile);
      $objReader = PHPExcel_IOFactory::createReader($fileType);
   
      $objReader->setReadDataOnly(true);   
      $objPHPExcel = $objReader->load($infile);    
   
      $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'CSV');
      $objWriter->save($outfile);
  }
 
?>