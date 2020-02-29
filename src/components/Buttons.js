import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import _ from 'lodash'
import { useStoreActions } from 'easy-peasy'

export default function () {
    return (
        <Grid item container spacing={1}>
            <Grid item>
                <NumericButtons />
            </Grid>
            <Grid item>
                <OperationButtons />
            </Grid>
        </Grid>
    )
}

function OperationButtons() {
    const operations = ["+", "-", "*", "/"];
    const addOperation = useStoreActions(actions => actions.addOperation);
    const clear = useStoreActions(actions => actions.clear);

    return (
        <Grid spacing={1}>
            {operations.map(x =>
                <Grid item container spacing={1}>
                    <Grid item>
                        <Button variant="contained" 
                        color="primary"
                        onClick={() => addOperation(x)}
                        >{x}</Button>
                    </Grid>
                </Grid>
            )}
            <Grid item container spacing={1}>
                    <Grid item>
                        <Button variant="contained" 
                        color="secondary"
                        onClick={() => clear()}
                        >{"C"}</Button>
                    </Grid>
                </Grid>
        </Grid>
    );
}

function NumericButtons() {

    const addDigit = useStoreActions(actions => actions.addDigit);
    const calculate = useStoreActions(actions => actions.calculate)

    const numericButtons = Array(10).fill(0).map((_, i) => ({
        displayName: i,
        onClick: () => addDigit(i),
    }))

    const zero = numericButtons.shift()

    return (
        <Grid spacing={1} justify="center">
            {_.chunk(numericButtons.map(x => <CalcButton {...x} />), 3)
                .map(threeComponentArray =>
                    <Grid item container spacing={1}>
                        {threeComponentArray.map(c => <Grid item>{c}</Grid>)}
                    </Grid>)}
            <Grid container item spacing={1} justify="flex-end">
                <Grid item>
                    <CalcButton onClick={() => calculate() }
                    color={"secondary"} displayName={"="} style={{ fontWeight: "bold" }} />
                </Grid>
                <Grid item>
                    <CalcButton {...zero} />
                </Grid>
                <Grid item>
                    <CalcButton displayName={"."} style={{ fontWeight: "bold" }} />
                </Grid>
            </Grid>
        </Grid>
    );
}

const CalcButton = ({ displayName, style, onClick, color }) => {
    return (
        <Button variant="contained"
            style={style}
            onClick={onClick}
            color={color}
        >
            {displayName}
        </Button>
    );
}