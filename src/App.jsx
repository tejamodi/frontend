import "./App.css"
import AllNavigations from "./components/AllNavigations";
import { createContext, useState } from "react";
export const store = createContext()
function App() {
	const [mealName, setMealName] = useState("")
	const [navId, setNavid] = useState("")
	const [formData, setFormData] = useState({
		location: "",
		cuisine: "",
		lcost: "",
		hcost: "",
		sort: 1,
		page: ""
	})

	const contextValues = {
		mealName, setMealName,
		formData, setFormData,
		navId, setNavid
	}

	return (
		<>
			<store.Provider value={contextValues}>
				<AllNavigations />
			</store.Provider>
		</>
	);
}

export default App;
