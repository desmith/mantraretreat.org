<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf54b9ff171d4daeafe97a7ed55fe54f4
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf54b9ff171d4daeafe97a7ed55fe54f4::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf54b9ff171d4daeafe97a7ed55fe54f4::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitf54b9ff171d4daeafe97a7ed55fe54f4::$classMap;

        }, null, ClassLoader::class);
    }
}