import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Search, PlusCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Products</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="Product ID" className="w-auto"></Input>
          <Input name="id" placeholder="Product Name" className="w-auto"></Input>
          <Button variant={"outline"}>
            <Search className="w-4 h-4 mr-2"></Search>
            Filter
          </Button>
        </form>

        <Button>
          <PlusCircle className="w-4 h-4 mr-2"></PlusCircle>
          New Product
        </Button>
      </div>

      <div className="border rounded">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{crypto.randomUUID()}</TableCell>
                  <TableCell>Produto 1</TableCell>
                  <TableCell>R$ 192,00</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App
