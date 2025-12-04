<script>
    document.addEventListener('DOMContentLoaded', () => { 
        // Selects the main container
        const container = document.querySelector('.container'); 
        
        // Selects the main heading text
        const birthdayText = document.querySelector('.birthday-text'); 
        
        // Corrected: selects the gift message element
        const giftMessage = document.querySelector('.gift-message'); 
        
        // Timeout to show the alert message after 1 second
        setTimeout(() => { 
            alert("Happy Birthday to my special Sriii!"); 
        }, 1000); 
    });
</script>
