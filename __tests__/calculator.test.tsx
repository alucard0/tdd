import { render, screen, cleanup } from "@testing-library/react"

const Calculator = (): JSX.Element=>{

    return <h1>Calculator</h1>
}

describe('Calculator',():void=>{
    //afterEach(cleanup)
    it('should render',():void =>{
        render(<Calculator />)
    })
    it('should render correct title',():void =>{
        render(<Calculator />)
        screen.getByText('Calculator')
    })
})