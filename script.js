
// SecureChain Pay JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Sample transaction data
    const transactions = [
        {
            id: 'tx_8273648291',
            date: 'Apr 8, 2025',
            recipient: 'Jane Doe',
            amount: '$250.00',
            status: 'completed'
        },
        {
            id: 'tx_7362534821',
            date: 'Apr 7, 2025',
            recipient: 'Coffee Shop Inc.',
            amount: '$120.50',
            status: 'completed'
        },
        {
            id: 'tx_6273648192',
            date: 'Apr 6, 2025',
            recipient: 'Utility Company',
            amount: '$350.00',
            status: 'pending'
        },
        {
            id: 'tx_5283648193',
            date: 'Apr 5, 2025',
            recipient: 'Online Store',
            amount: '$75.25',
            status: 'failed'
        },
        {
            id: 'tx_4283648194',
            date: 'Apr 4, 2025',
            recipient: 'John Smith',
            amount: '$425.75',
            status: 'completed'
        },
        {
            id: 'tx_3283648195',
            date: 'Apr 3, 2025',
            recipient: 'Hardware Store',
            amount: '$89.99',
            status: 'completed'
        },
        {
            id: 'tx_2283648196',
            date: 'Apr 2, 2025',
            recipient: 'Subscription Service',
            amount: '$14.99',
            status: 'completed'
        },
        {
            id: 'tx_1283648197',
            date: 'Apr 1, 2025',
            recipient: 'Crypto Exchange',
            amount: '$1,000.00',
            status: 'pending'
        }
    ];

    // Initialize variables
    let displayCount = 4; // Initial number of transactions to display
    const transactionList = document.getElementById('transaction-list');
    const loadMoreBtn = document.getElementById('load-more-btn');

    // Function to render transactions
    function renderTransactions() {
        // Clear existing transactions
        transactionList.innerHTML = '';
        
        // Display the specified number of transactions
        transactions.slice(0, displayCount).forEach(tx => {
            const row = document.createElement('tr');
            
            // Create status class based on transaction status
            let statusClass = '';
            switch(tx.status) {
                case 'completed':
                    statusClass = 'status-completed';
                    break;
                case 'pending':
                    statusClass = 'status-pending';
                    break;
                case 'failed':
                    statusClass = 'status-failed';
                    break;
            }
            
            // Create table row with transaction data
            row.innerHTML = `
                <td><span class="fw-medium">${tx.id.slice(0, 8)}...</span></td>
                <td>${tx.date}</td>
                <td>${tx.recipient}</td>
                <td>${tx.amount}</td>
                <td><span class="fw-medium ${statusClass}">${tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}</span></td>
            `;
            
            transactionList.appendChild(row);
        });
        
        // Hide the "Show More" button if all transactions are displayed
        if (displayCount >= transactions.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    // Load More Button Click Handler
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            displayCount += 4; // Increase the number of displayed transactions
            renderTransactions();
        });
    }

    // Initial render of transactions
    renderTransactions();

    // Initialize blockchain network data updates
    initializeBlockchainUpdates();
    
    // Handle Payment Form Submission
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const recipient = document.getElementById('recipient').value;
            const amount = document.getElementById('amount').value;
            
            if (!recipient || !amount) {
                showAlert('Please fill in all fields', 'danger');
                return;
            }
            
            // Simulate payment processing
            showAlert('Payment initiated! Processing...', 'info');
            
            // Simulate blockchain confirmation delay
            setTimeout(() => {
                showAlert('Payment of $' + amount + ' sent successfully!', 'success');
                
                // Add the new transaction to the list
                transactions.unshift({
                    id: 'tx_' + Math.floor(Math.random() * 10000000000),
                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    recipient: recipient,
                    amount: '$' + parseFloat(amount).toFixed(2),
                    status: 'pending'
                });
                
                // Re-render transactions
                renderTransactions();
                
                // Reset form
                paymentForm.reset();
            }, 2000);
        });
    }
    
    // Login button click handler to show modal
    const loginButton = document.querySelector('a[href="#login"]');
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault();
            const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();
        });
    }
    
    // Login form submission handler
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simulate login process
            showAlert('Logging in...', 'info');
            
            // Here you would normally make an API call to authenticate
            setTimeout(() => {
                showAlert('Login successful!', 'success');
                const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
                loginModal.hide();
            }, 1500);
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#login') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Function to display alerts
function showAlert(message, type) {
    // Check if an alert container already exists
    let alertContainer = document.querySelector('.alert-container');
    
    // If not, create one
    if (!alertContainer) {
        alertContainer = document.createElement('div');
        alertContainer.className = 'alert-container position-fixed top-0 end-0 p-3';
        document.body.appendChild(alertContainer);
    }
    
    // Create the alert element
    const alertEl = document.createElement('div');
    alertEl.className = `alert alert-${type} alert-dismissible fade show`;
    alertEl.setAttribute('role', 'alert');
    alertEl.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Add it to the container
    alertContainer.appendChild(alertEl);
    
    // Automatically dismiss after 5 seconds
    setTimeout(() => {
        const bsAlert = new bootstrap.Alert(alertEl);
        bsAlert.close();
    }, 5000);
}

// Function to simulate blockchain data updates
function initializeBlockchainUpdates() {
    const blockHeight = document.getElementById('block-height');
    const confirmations = document.getElementById('confirmations');
    const hashRate = document.getElementById('hash-rate');
    
    if (!blockHeight || !confirmations || !hashRate) return;
    
    // Current values
    let currentBlockHeight = 912345;
    let currentHashRate = 143.5;
    
    // Update block height periodically
    setInterval(() => {
        currentBlockHeight++;
        blockHeight.textContent = currentBlockHeight.toLocaleString();
    }, 30000); // New block approximately every 30 seconds
    
    // Simulate hash rate fluctuations
    setInterval(() => {
        // Randomly fluctuate hash rate within a small range
        const fluctuation = (Math.random() - 0.5) * 2; // Between -1 and 1
        currentHashRate += fluctuation;
        currentHashRate = Math.max(140, Math.min(150, currentHashRate)); // Keep within reasonable bounds
        hashRate.textContent = currentHashRate.toFixed(1) + ' EH/s';
    }, 10000); // Update every 10 seconds
}

// Function to animate counters on scroll
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.innerText.replace(/,/g, '').replace(/[^0-9.-]+/g, ""));
        const suffix = counter.innerText.replace(/[0-9.-]/g, '');
        const duration = 1500;
        const steps = 50;
        const stepTime = duration / steps;
        let current = 0;
        
        const updateCounter = () => {
            current += target / steps;
            if (current < target) {
                counter.innerText = Math.ceil(current).toLocaleString() + suffix;
                setTimeout(updateCounter, stepTime);
            } else {
                counter.innerText = counter.dataset.target;
            }
        };
        
        updateCounter();
    });
}

// Initialize counter animations when the stats section becomes visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the stats section
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    observer.observe(statsSection);
}

// Add active class to current nav item based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    let scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector('.navbar-nav a[href="#' + sectionId + '"]')?.classList.add('active');
        } else {
            document.querySelector('.navbar-nav a[href="#' + sectionId + '"]')?.classList.remove('active');
        }
    });
});
