Loading time is optimized by making fetch immediately after selecting gene of interest
and letting it resolve as user clicks through expression and dataset screen.

However, navigation from dataset selection to results screen is tricky because of this.
Some logic for navigation from dataset selection to results is handled by MobX state. Part of the logic
is also handled as the fetch resolves (In the HomeScreen). In the future, I hope to
clean this logic up and make it more modular.
