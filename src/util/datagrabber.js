let sales;

const processedData = (data) => {
    const carSales =  data.JSONresponeSales.filter(elm => elm.key==='car')[0].sales_over_time.buckets;
    const phoneSales =  data.JSONresponeSales.filter(elm => elm.key==='phone')[0].sales_over_time.buckets;
     const umbrellas =  data.JSONresponeSales.filter(elm => elm.key==='umbrellas')[0].sales_over_time.buckets;
    sales = carSales.map( item => {
        const Dailysale = {};
		var mydate = new Date(item.key_as_string);
        Dailysale.date = mydate.toDateString();
        Dailysale.car = item.total_sales.value;
        
        return Dailysale;
    });

    phoneSales.map(addPhones);
    sales.map(item => {
        item.carTotal=item.carTotal + item.car;
        item.phoneTotal=item.phoneTotal + item.phone;
    });
	
	umbrellas.map(addUmbrellas);
	   sales.map(item => {
        item.carTotal=item.carTotal + item.car;
        item.phoneTotal=item.phoneTotal + item.phone;
		item.umbrellasTotal=item.umbrellasTotal + item.umbrellas;
    });
    return sales;
}


function addPhones (item, index) {
		var mydate = new Date(item.key_as_string);
        mydate = mydate.toDateString();
    if (sales[index].date===mydate) {
        sales[index].phone = item.total_sales.value;
    } 
}
function addUmbrellas (item, index) {
		var mydate = new Date(item.key_as_string);
        mydate = mydate.toDateString();
    if (sales[index].date===item.key_as_string) {
        sales[index].umbrellas = item.total_sales.value;
    } 
}
export { processedData };