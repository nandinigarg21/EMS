import toast from 'react-hot-toast';

const httpAction = async (data) => {
    
        const response = await fetch(data.url, {
            method: data.method || 'GET',
            body: data.formData || (data.body ? data.body : null),
            headers: data.formData ? {} : { 'Content-Type': 'application/json' },
            credentials: "include",
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        // console.log("API Response:", result);
        return result;

    
};

export default httpAction;