FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    nginx \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    supervisor

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY . .

# Install dependencies
RUN composer install --no-interaction --no-dev --optimize-autoloader

# Copy nginx configuration
COPY nginx.conf /etc/nginx/sites-available/default

# Create supervisor config
RUN echo '[supervisord]\nnodaemon=true\n\n[program:php-fpm]\ncommand=php-fpm\n\n[program:nginx]\ncommand=nginx -g "daemon off;"' > /etc/supervisor/conf.d/supervisord.conf

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage

# Generate application key
RUN php artisan key:generate

# Expose the port
ENV PORT=10000
EXPOSE ${PORT}

# Use supervisor to run both nginx and php-fpm
CMD sed -i "s/\${PORT}/$PORT/g" /etc/nginx/sites-available/default && supervisord -c /etc/supervisor/conf.d/supervisord.conf
