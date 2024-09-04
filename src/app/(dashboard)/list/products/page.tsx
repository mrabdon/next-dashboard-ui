import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { productsData, role, } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  productId: number;
  name: string;
  productType: string;
  description: string;
  price: string;
  stock: string;
  photo: string;
};
const columns = [
  {
    header: "No.",
    accessor: "info",
    className: "text-center",
  },
  {
    header: "Product Info",
    accessor: "info",
    className: "",
  },

  {
    header: "Description",
    accessor: "description",
    className: "hidden md:table-cell",
  },
  {
    header: "Price",
    accessor: "price",
    className: "hidden lg:table-cell",
  },
  {
    header: "Stock",
    accessor: "stock",
    className: "hidden lg:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
    className: "hidden lg:table-cell",
  },
];
const ProductListPage = () => {
  const renderRow = (item: Product) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-highlight"
    >
      <td className="text-center md:table-cell">{item.id}</td>
      <td className="flex items-center gap-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md: hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.productType}</p>
        </div>
      </td>
      <td>{item.description}</td>
      <td className="hidden md:table-cell ">{item.price}</td>
      <td className="hidden md:table-cell ">{item.stock}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/products/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="product" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Products</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormModal table="product" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={productsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ProductListPage;
