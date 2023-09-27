import { render, screen } from "@testing-library/react"
import { Url } from "../url"

describe("App", () => {
test("first test", () => {
render(<Url />)
const linkElement = screen.getByText(/Click/i)
expect(linkElement).toBeInTheDocument()
})
})


describe("Url", () => {
test("test name is displayed", () => {
render(<Url/>)
const nameElement = screen.getByText(/f/i)
expect(nameElement).toBeInTheDocument()
})

})