// Energy = Power * Time.
// Cost of energy use = Energy used * Cost per unit of energy.
// Cost of energy use = n kWh * n c/kWh

const d = document;

class Bill {
    constructor(power, time, cost) {
        this.power = power;
        this.time = time;
        this.cost = cost;
    }

    calculate() {
        const result = d.querySelector('#result'),
              energyUsed = (this.power / 1000) * this.time,
              costEU = energyUsed * this.cost;

        result.value = energyUsed + " kWh * " + this.cost + " c/kWh = " + costEU + "c.";
    }

    static reset() {
        d.querySelector('#power').value = "";
        d.querySelector('#time').value = "";
        d.querySelector('#cost').value = "";
    }
}

d.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();
    
    const power =  d.querySelector('#power').value,
          time = d.querySelector('#time').value,
          cost = d.querySelector('#cost').value;

    const bill = new Bill(power, time, cost);
    bill.calculate();
});

d.querySelector('#reset').addEventListener('click', () => Bill.reset());
