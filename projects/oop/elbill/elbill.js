const select = (s) => document.querySelector(s);
const p = '#power', t = '#time',
      c = '#cost', r = '#result';

class Bill {
    constructor(p, t, c) {
        this.p = p;
        this.t = t;
        this.c = c;
    }

    calculate() {
        const result = select(r),
              energyUsed = (this.p / 1000) * this.t,
              costEU = energyUsed * this.c;

        result.value = "Cost of energy use: " + energyUsed 
                        + " kWh * " + this.c 
                        + " c/kWh = " + costEU + "c.";
    }

    static reset() {
        select(p).value = "";
        select(t).value = "";
        select(c).value = "";
    }
}

select('#submit').addEventListener('click', (e) => {
    e.preventDefault();

    const bill = new Bill(select(p).value, select(t).value, select(c).value);
    bill.calculate();
});

select('#reset').addEventListener('click', () => Bill.reset());
