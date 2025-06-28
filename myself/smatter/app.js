const { createApp } = Vue;

createApp({
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            message: '',
            error: false
        };
    },
    methods: {
        async submitForm() {
            this.message = '';
            this.error = false;

            if (!this.email || !this.password || !this.confirmPassword) {
                this.message = 'All fields are required.';
                this.error = true;
                return;
            }

            const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailPattern.test(this.email)) {
                this.message = 'Invalid email format.';
                this.error = true;
                return;
            }

            if (this.password !== this.confirmPassword) {
                this.message = 'Passwords do not match.';
                this.error = true;
                return;
            }

            // Prepare form data to send to PHP backend
            const formData = new FormData();
            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('confirm_password', this.confirmPassword);

            try {
                const response = await fetch('signup.php', {
                    method: 'POST',
                    body: formData
                });
                const result = await response.text();
                this.message = result;
                this.error = !result.toLowerCase().includes('success');
                if (!this.error) {
                    this.email = '';
                    this.password = '';
                    this.confirmPassword = '';
                }
            } catch (error) {
                this.message = 'An error occurred. Please try again.';
                this.error = true;
            }
        }
    }
}).mount('#app');
