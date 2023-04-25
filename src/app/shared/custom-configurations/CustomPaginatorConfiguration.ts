import {MatPaginatorIntl} from '@angular/material/paginator';

export function CustomPaginator() {
    
    
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Itens por página';
  customPaginatorIntl.nextPageLabel= "Próxima";
  customPaginatorIntl.previousPageLabel= "Anterior";
  customPaginatorIntl.firstPageLabel= "Primeira página";
  customPaginatorIntl.lastPageLabel= "Última página";  

  return customPaginatorIntl;
}