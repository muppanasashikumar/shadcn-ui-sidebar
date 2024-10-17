import React, { ChangeEvent, useRef, useState } from 'react';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Button } from "@/components/ui/button";
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { ArrowRightFromLine, Filter } from 'lucide-react';


interface Product {
    id: number;
    name: string;
    price: string;
    category: string;
    quantity: number;
    rating: number;
}

const defaultFilters: DataTableFilterMeta = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    category: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    quantity: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    rating: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
};

const Table = () => {
    const productsArr: Product[] = [
        { id: 1, name: "Apple Watch", price: "₦350,000", category: "Accessories", quantity: 7, rating: 5 },
        { id: 2, name: "Fitness watch", price: "₦10,000", category: "Fitness", quantity: 23, rating: 2 },
        { id: 3, name: "Beach dress", price: "₦25,000", category: "Clothing", quantity: 5, rating: 4 },
        { id: 4, name: "Washing machine", price: "₦260,000", category: "Electronics", quantity: 10, rating: 4 },
        { id: 5, name: "Blue Jeans", price: "₦10,000", category: "Clothing", quantity: 50, rating: 5 },
        { id: 6, name: "Samsung Watch", price: "₦270,000", category: "Accessories", quantity: 7, rating: 3 },
        { id: 7, name: "Yoga mat", price: "₦15,000", category: "Fitness", quantity: 15, rating: 4 },
        { id: 8, name: "Jumpsuit", price: "₦15,700", category: "Clothing", quantity: 30, rating: 5 },
        { id: 9, name: "Hand mixer", price: "₦50,000", category: "Electronics", quantity: 10, rating: 4 },
        { id: 10, name: "Pallazo", price: "₦12,000", category: "Clothing", quantity: 4, rating: 3 },
    ];

    const [products] = useState<Product[]>(productsArr);
    const [filters, setFilters] = useState<DataTableFilterMeta>(defaultFilters);
    const dt = useRef<DataTable<Product[]>>(null);
    const clearFilter = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            id: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
            },
            name: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
            },
            category: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
            },
            quantity: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
            },
            rating: {
                operator: FilterOperator.AND,
              constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
            },
        });
    };

    // const initFilters = () => {

    //     setFilters(defaultFilters);

    // };




    const onFilterChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [field]: { value, matchMode: FilterMatchMode.CONTAINS }
        }));
    };

    const exportCSV = () => {
        dt.current?.exportCSV();
    };

    const header = (
        <div className="flex flex-wrap justify-between gap-2">
            <span className="text-xl text-900 font-bold">Transaction Details</span>
            <div className='flex space-x-2'>
                <Button type="button" variant="outline" className='d-flex space-x-2 border-[1px] border-customColor'
                    onClick={clearFilter}>
                    <Filter className='text-tertiary w-4 h-4' />
                    <span className='text-tertiary'>Clear Filter</span>
                </Button>
                <Button type="submit" variant="outline" className='d-flex space-x-2 border-[1px] border-customColor' onClick={exportCSV}>
                    <ArrowRightFromLine className='text-tertiary w-4 h-4' />
                    <span className='text-tertiary'>Export</span>
                </Button>
            </div>
        </div>
    );

    return (
        <div className="table-wrapper">
            <DataTable
                ref={dt}
                value={products}
                showGridlines
                responsiveLayout={'scroll'}
                paginator
                header={header}
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                paginatorTemplate="CurrentPageReport PrevPageLink PageLinks NextPageLink  RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                tableStyle={{ minWidth: '50rem' }}
                filters={filters}
                filterDisplay="row"
            >

                {['id', 'name', 'category', 'quantity', 'rating'].map((field) => (
                    <Column
                        key={field}
                        field={field}
                     header={field.charAt(0).toUpperCase() + field.slice(1)}
                        filter
                        filterElement={
                            <InputText
                                type="search"
                                onInput={(e: ChangeEvent<HTMLInputElement>) => onFilterChange(e, field)}
                                placeholder={`Filter`}
                                style={{ width: '100%', border: '1px solid #000', padding: '0.25rem' }}
                            />
                        }
                    />
                ))}
            </DataTable>
        </div>
    );
}

export default Table;