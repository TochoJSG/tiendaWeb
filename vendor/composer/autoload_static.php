<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4b58efd719a2a36a6034fbe19b6caddb
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\Cache\\' => 10,
        ),
        'M' => 
        array (
            'MercadoPago\\' => 12,
        ),
        'D' => 
        array (
            'Doctrine\\Persistence\\' => 21,
            'Doctrine\\Deprecations\\' => 22,
            'Doctrine\\Common\\Lexer\\' => 22,
            'Doctrine\\Common\\Annotations\\' => 28,
            'Doctrine\\Common\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\Cache\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/cache/src',
        ),
        'MercadoPago\\' => 
        array (
            0 => __DIR__ . '/..' . '/mercadopago/dx-php/src/MercadoPago',
            1 => __DIR__ . '/..' . '/mercadopago/dx-php/tests',
            2 => __DIR__ . '/..' . '/mercadopago/dx-php/src/MercadoPago/Generic',
            3 => __DIR__ . '/..' . '/mercadopago/dx-php/src/MercadoPago/Entities',
            4 => __DIR__ . '/..' . '/mercadopago/dx-php/src/MercadoPago/Entities/Shared',
        ),
        'Doctrine\\Persistence\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/persistence/src/Persistence',
        ),
        'Doctrine\\Deprecations\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/deprecations/lib/Doctrine/Deprecations',
        ),
        'Doctrine\\Common\\Lexer\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/lexer/src',
        ),
        'Doctrine\\Common\\Annotations\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/annotations/lib/Doctrine/Common/Annotations',
        ),
        'Doctrine\\Common\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/event-manager/src',
            1 => __DIR__ . '/..' . '/doctrine/common/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4b58efd719a2a36a6034fbe19b6caddb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4b58efd719a2a36a6034fbe19b6caddb::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit4b58efd719a2a36a6034fbe19b6caddb::$classMap;

        }, null, ClassLoader::class);
    }
}
