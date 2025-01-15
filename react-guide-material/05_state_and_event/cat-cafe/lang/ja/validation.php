<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | 以下の言語行は、バリデータクラスによって使用されるデフォルトのエラーメッセージです。
    | これらのルールのいくつかには、サイズルールのように複数のバージョンがあります。
    | ここでそれぞれのメッセージを自由に調整してください。
    |
    */

    'accepted' => ':attribute を承認する必要があります。',
    'accepted_if' => ':other が :value のとき、:attribute を承認する必要があります。',
    'active_url' => ':attribute は有効なURLである必要があります。',
    'after' => ':attribute は :date 以降の日付である必要があります。',
    'after_or_equal' => ':attribute は :date 以降または同日の日付である必要があります。',
    'alpha' => ':attribute には文字のみを含めることができます。',
    'alpha_dash' => ':attribute には文字、数字、ダッシュ、アンダースコアのみを含めることができます。',
    'alpha_num' => ':attribute には文字と数字のみを含めることができます。',
    'array' => ':attribute は配列である必要があります。',
    'ascii' => ':attribute には半角英数字と記号のみを含めることができます。',
    'before' => ':attribute は :date 以前の日付である必要があります。',
    'before_or_equal' => ':attribute は :date 以前または同日の日付である必要があります。',
    'between' => [
        'array' => ':attribute の項目数は :min から :max の間である必要があります。',
        'file' => ':attribute のファイルサイズは :min から :max キロバイトの間である必要があります。',
        'numeric' => ':attribute の値は :min から :max の間である必要があります。',
        'string' => ':attribute の文字数は :min から :max の間である必要があります。',
    ],
    'boolean' => ':attribute は真偽値である必要があります。',
    'can' => ':attribute には許可されていない値が含まれています。',
    'confirmed' => ':attribute の確認が一致しません。',
    'contains' => ':attribute に必須の値が欠けています。',
    'current_password' => 'パスワードが正しくありません。',
    'date' => ':attribute は有効な日付である必要があります。',
    'date_equals' => ':attribute は :date と同じ日付である必要があります。',
    'date_format' => ':attribute は :format 形式と一致する必要があります。',
    'decimal' => ':attribute には :decimal 桁の小数が必要です。',
    'declined' => ':attribute は辞退される必要があります。',
    'declined_if' => ':other が :value のとき、:attribute は辞退される必要があります。',
    'different' => ':attribute と :other は異なる必要があります。',
    'digits' => ':attribute は :digits 桁である必要があります。',
    'digits_between' => ':attribute の桁数は :min から :max の間である必要があります。',
    'dimensions' => ':attribute は無効な画像寸法を持っています。',
    'distinct' => ':attribute には重複した値があります。',
    'doesnt_end_with' => ':attribute は次のいずれかで終わってはなりません: :values。',
    'doesnt_start_with' => ':attribute は次のいずれかで始まってはなりません: :values。',
    'email' => ':attribute は有効なメールアドレスである必要があります。',
    'ends_with' => ':attribute は次のいずれかで終わる必要があります: :values。',
    'enum' => '選択された :attribute は無効です。',
    'exists' => '選択された :attribute は無効です。',
    'extensions' => ':attribute には次のいずれかの拡張子が必要です: :values。',
    'file' => ':attribute はファイルである必要があります。',
    'filled' => ':attribute には値が必要です。',
    'gt' => [
        'array' => ':attribute の項目数は :value を超える必要があります。',
        'file' => ':attribute のファイルサイズは :value キロバイトを超える必要があります。',
        'numeric' => ':attribute の値は :value を超える必要があります。',
        'string' => ':attribute の文字数は :value を超える必要があります。',
    ],
    'gte' => [
        'array' => ':attribute の項目数は :value 個以上である必要があります。',
        'file' => ':attribute のファイルサイズは :value キロバイト以上である必要があります。',
        'numeric' => ':attribute の値は :value 以上である必要があります。',
        'string' => ':attribute の文字数は :value 以上である必要があります。',
    ],
    'hex_color' => ':attribute は有効な16進カラーである必要があります。',
    'image' => ':attribute は画像である必要があります。',
    'in' => '選択された :attribute は無効です。',
    'in_array' => ':attribute は :other に存在する必要があります。',
    'integer' => ':attribute は整数である必要があります。',
    'ip' => ':attribute は有効なIPアドレスである必要があります。',
    'ipv4' => ':attribute は有効なIPv4アドレスである必要があります。',
    'ipv6' => ':attribute は有効なIPv6アドレスである必要があります。',
    'json' => ':attribute は有効なJSON文字列である必要があります。',
    'list' => ':attribute はリストである必要があります。',
    'lowercase' => ':attribute は小文字である必要があります。',
    'lt' => [
        'array' => ':attribute の項目数は :value 未満である必要があります。',
        'file' => ':attribute のファイルサイズは :value キロバイト未満である必要があります。',
        'numeric' => ':attribute の値は :value 未満である必要があります。',
        'string' => ':attribute の文字数は :value 未満である必要があります。',
    ],
    'lte' => [
        'array' => ':attribute の項目数は :value を超えてはなりません。',
        'file' => ':attribute のファイルサイズは :value キロバイト以下である必要があります。',
        'numeric' => ':attribute の値は :value 以下である必要があります。',
        'string' => ':attribute の文字数は :value 以下である必要があります。',
    ],
    'mac_address' => ':attribute は有効なMACアドレスである必要があります。',
    'max' => [
        'array' => ':attribute の項目数は :max を超えてはなりません。',
        'file' => ':attribute のファイルサイズは :max キロバイトを超えてはなりません。',
        'numeric' => ':attribute の値は :max を超えてはなりません。',
        'string' => ':attribute の文字数は :max を超えてはなりません。',
    ],
    'max_digits' => ':attribute は :max 桁を超えてはなりません。',
    'mimes' => ':attribute は次のタイプのファイルである必要があります: :values。',
    'mimetypes' => ':attribute は次のタイプのファイルである必要があります: :values。',
    'min' => [
        'array' => ':attribute の項目数は少なくとも :min である必要があります。',
        'file' => ':attribute のファイルサイズは少なくとも :min キロバイトである必要があります。',
        'numeric' => ':attribute の値は少なくとも :min である必要があります。',
        'string' => ':attribute の文字数は少なくとも :min である必要があります。',
    ],
    'min_digits' => ':attribute は少なくとも :min 桁である必要があります。',
    'missing' => ':attribute は欠けている必要があります。',
    'missing_if' => ':other が :value のとき、:attribute は欠けている必要があります。',
    'missing_unless' => ':other が :value でない限り、:attribute は欠けている必要があります。',
    'missing_with' => ':values が存在する場合、:attribute は欠けている必要があります。',
    'missing_with_all' => ':values が存在する場合、:attribute は欠けている必要があります。',
    'multiple_of' => ':attribute は :value の倍数である必要があります。',
    'not_in' => '選択された :attribute は無効です。',
    'not_regex' => ':attribute の形式が無効です。',
    'numeric' => ':attribute は数値である必要があります。',
    'password' => [
        'letters' => ':attribute には少なくとも1文字を含める必要があります。',
        'mixed' => ':attribute には少なくとも1つの大文字と1つの小文字を含める必要があります。',
        'numbers' => ':attribute には少なくとも1つの数字を含める必要があります。',
        'symbols' => ':attribute には少なくとも1つの記号を含める必要があります。',
        'uncompromised' => '提供された :attribute はデータ流出に含まれています。異なる :attribute を選んでください。',
    ],
    'present' => ':attribute が存在する必要があります。',
    'present_if' => ':other が :value のとき、:attribute が存在する必要があります。',
    'present_unless' => ':other が :value でない限り、:attribute が存在する必要があります。',
    'present_with' => ':values が存在する場合、:attribute が存在する必要があります。',
    'present_with_all' => ':values が存在する場合、:attribute が存在する必要があります。',
    'prohibited' => ':attribute は禁止されています。',
    'prohibited_if' => ':other が :value のとき、:attribute は禁止されています。',
    'prohibited_unless' => ':other が :values にない限り、:attribute は禁止されています。',
    'prohibits' => ':attribute は :other の存在を禁止します。',
    'regex' => ':attribute の形式が無効です。',
    'required' => ':attribute は必須です。',
    'required_array_keys' => ':attribute には次の項目を含める必要があります: :values。',
    'required_if' => ':other が :value のとき、:attribute は必須です。',
    'required_if_accepted' => ':other が承認されたとき、:attribute は必須です。',
    'required_if_declined' => ':other が辞退されたとき、:attribute は必須です。',
    'required_unless' => ':other が :values にない限り、:attribute は必須です。',
    'required_with' => ':values が存在する場合、:attribute は必須です。',
    'required_with_all' => ':values が存在する場合、:attribute は必須です。',
    'required_without' => ':values が存在しない場合、:attribute は必須です。',
    'required_without_all' => ':values のいずれも存在しない場合、:attribute は必須です。',
    'same' => ':attribute と :other は一致する必要があります。',
    'size' => [
        'array' => ':attribute は :size 個の項目を含む必要があります。',
        'file' => ':attribute のファイルサイズは :size キロバイトである必要があります。',
        'numeric' => ':attribute の値は :size である必要があります。',
        'string' => ':attribute の文字数は :size 文字である必要があります。',
    ],
    'starts_with' => ':attribute は次のいずれかで始まる必要があります: :values。',
    'string' => ':attribute は文字列である必要があります。',
    'timezone' => ':attribute は有効なタイムゾーンである必要があります。',
    'unique' => ':attribute はすでに使用されています。',
    'uploaded' => ':attribute のアップロードに失敗しました。',
    'uppercase' => ':attribute は大文字である必要があります。',
    'url' => ':attribute は有効なURLである必要があります。',
    'ulid' => ':attribute は有効なULIDである必要があります。',
    'uuid' => ':attribute は有効なUUIDである必要があります。',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | ここでは、特定の属性ルールに対するカスタムバリデーションメッセージを指定できます。
    | これは、特定の属性ルールのためのカスタム言語行を迅速に指定するためのものです。
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | 以下の言語行は、属性プレースホルダーを「Eメールアドレス」のような
    | より読者に優しいものと交換するために使用されます。これは私たちの
    | メッセージをより表現力豊かにするのに役立ちます。
    |
    */

    'attributes' => [
        'name' => '名前',
        'name_kana' => '名前(フリガナ)',
        'phone' => '電話番号',
        'email' => 'メールアドレス',
        'body' => '本文'
    ],

];
