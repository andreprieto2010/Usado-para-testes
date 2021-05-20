 // dados gráfico de barra vendas (1° gráfico)
 var ctx = vendas.getContext('2d');
  
 var venda = new Chart(ctx, {
   type: 'line',
   data: {
         labels: ['18 de abril', '19 de abril', '20 de abril', '21 de abril', '22 de abril'],
         datasets: [{
             label: 'Vendas no mês de abril',
             data: [100, 120, 140, 170, 200],
             backgroundColor:"#03313D",
             borderColor: "#00959C",
             borderWidth: 2
         }]
     },
     options: {
     }
 });


 // dados gráfico de barra usuarios (1° gráfico)

 var ctx = usuarios.getContext('2d');
 
 var usuario = new Chart(ctx, {
   type: 'bar',
   data: {
         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
         datasets: [{
             label: 'Usuarios no sistema',
             data: [240, 299, 420, 600],
             backgroundColor:"#03313D",
             borderColor: "#00959C",
             borderWidth: 2
         }]
     },
     options: {
     }
 });

// dados gráfico de barra empresas (3° gráfico)

 var ctx = empresas.getContext('2d');
 
 var empresa = new Chart(ctx, {
   type: 'bar',
   data: {
         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
         datasets: [{
           label: 'Empresas no sistema',
             data: [210, 280, 390, 500],
             backgroundColor:"#03313D",
             borderColor: "#00959C",
             borderWidth: 2
         }]
     },
     options: {
     }
 });