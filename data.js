window.BENCHMARK_DATA = {
  "lastUpdate": 1657563698008,
  "repoUrl": "https://github.com/gear-tech/gear",
  "entries": {
    "Gear workspace tests": [
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "f7ed4ccfed64474d5b5e39b0f499013cf2621704",
          "message": "Fix clippy warnings",
          "timestamp": "2022-07-11T17:18:31Z",
          "url": "https://github.com/gear-tech/gear/commit/f7ed4ccfed64474d5b5e39b0f499013cf2621704"
        },
        "date": 1657560797382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 9504300000,
            "unit": "ns",
            "range": "± 22564463689"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 35600000,
            "unit": "ns",
            "range": "± 23251666"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 43600000,
            "unit": "ns",
            "range": "± 46033031"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 42900000,
            "unit": "ns",
            "range": "± 22655904"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 113100000,
            "unit": "ns",
            "range": "± 39765437"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 83100000,
            "unit": "ns",
            "range": "± 72829183"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 60400000,
            "unit": "ns",
            "range": "± 68205864"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 37700000,
            "unit": "ns",
            "range": "± 30551759"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 40100000,
            "unit": "ns",
            "range": "± 43713727"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 366200000,
            "unit": "ns",
            "range": "± 91702562"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 72300000,
            "unit": "ns",
            "range": "± 72386531"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 64500000,
            "unit": "ns",
            "range": "± 54474305"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 56500000,
            "unit": "ns",
            "range": "± 49824190"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 85600000,
            "unit": "ns",
            "range": "± 35168736"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 70800000,
            "unit": "ns",
            "range": "± 71169937"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 75800000,
            "unit": "ns",
            "range": "± 49929550"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 46500000,
            "unit": "ns",
            "range": "± 36155912"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 75100000,
            "unit": "ns",
            "range": "± 58354862"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 84400000,
            "unit": "ns",
            "range": "± 99645571"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 54500000,
            "unit": "ns",
            "range": "± 38779504"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 54500000,
            "unit": "ns",
            "range": "± 52133002"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 61700000,
            "unit": "ns",
            "range": "± 43616625"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 73000000,
            "unit": "ns",
            "range": "± 65359008"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 64100000,
            "unit": "ns",
            "range": "± 46269752"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 77100000,
            "unit": "ns",
            "range": "± 43645045"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 69600000,
            "unit": "ns",
            "range": "± 50040383"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 83500000,
            "unit": "ns",
            "range": "± 61753137"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 86300000,
            "unit": "ns",
            "range": "± 57445713"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 64600000,
            "unit": "ns",
            "range": "± 46150189"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 98500000,
            "unit": "ns",
            "range": "± 62552777"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 99600000,
            "unit": "ns",
            "range": "± 83864414"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 51200000,
            "unit": "ns",
            "range": "± 30188739"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 48000000,
            "unit": "ns",
            "range": "± 35304390"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 66200000,
            "unit": "ns",
            "range": "± 56313053"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 57700000,
            "unit": "ns",
            "range": "± 33597767"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 69300000,
            "unit": "ns",
            "range": "± 47732693"
          },
          {
            "name": "pallet-gear - tests::submit_program_expected_failure",
            "value": 80600000,
            "unit": "ns",
            "range": "± 48336735"
          },
          {
            "name": "pallet-gear - tests::submit_program_fails_on_duplicate_id",
            "value": 85700000,
            "unit": "ns",
            "range": "± 60918059"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 269000000,
            "unit": "ns",
            "range": "± 55121683"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 54700000,
            "unit": "ns",
            "range": "± 27571905"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 71400000,
            "unit": "ns",
            "range": "± 40951678"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 77800000,
            "unit": "ns",
            "range": "± 46157989"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 104500000,
            "unit": "ns",
            "range": "± 67825142"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 98700000,
            "unit": "ns",
            "range": "± 64423675"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 112500000,
            "unit": "ns",
            "range": "± 57753354"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 154600000,
            "unit": "ns",
            "range": "± 63185757"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 91200000,
            "unit": "ns",
            "range": "± 44305304"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 104700000,
            "unit": "ns",
            "range": "± 65717653"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 81200000,
            "unit": "ns",
            "range": "± 53760208"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 90800000,
            "unit": "ns",
            "range": "± 44874937"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 72800000,
            "unit": "ns",
            "range": "± 47557964"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 96700000,
            "unit": "ns",
            "range": "± 76031638"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 91500000,
            "unit": "ns",
            "range": "± 54843869"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 119700000,
            "unit": "ns",
            "range": "± 60206395"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 108600000,
            "unit": "ns",
            "range": "± 72473719"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 100900000,
            "unit": "ns",
            "range": "± 59827167"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 77100000,
            "unit": "ns",
            "range": "± 49237079"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 128900000,
            "unit": "ns",
            "range": "± 56296447"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 90900000,
            "unit": "ns",
            "range": "± 71581352"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 95900000,
            "unit": "ns",
            "range": "± 77263768"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 94000000,
            "unit": "ns",
            "range": "± 55853379"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 85000000,
            "unit": "ns",
            "range": "± 47995833"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 87900000,
            "unit": "ns",
            "range": "± 67657150"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 67200000,
            "unit": "ns",
            "range": "± 26969612"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 63200000,
            "unit": "ns",
            "range": "± 33513579"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 90400000,
            "unit": "ns",
            "range": "± 60347659"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 72800000,
            "unit": "ns",
            "range": "± 54631126"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 89100000,
            "unit": "ns",
            "range": "± 51296101"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 62300000,
            "unit": "ns",
            "range": "± 38131483"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 82200000,
            "unit": "ns",
            "range": "± 40992194"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 74000000,
            "unit": "ns",
            "range": "± 47394092"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree",
            "value": 55500000,
            "unit": "ns",
            "range": "± 36376503"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 79400000,
            "unit": "ns",
            "range": "± 66320735"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 80400000,
            "unit": "ns",
            "range": "± 51067014"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure",
            "value": 43400000,
            "unit": "ns",
            "range": "± 18655830"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 49800000,
            "unit": "ns",
            "range": "± 31333049"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 65100000,
            "unit": "ns",
            "range": "± 44392454"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 46600000,
            "unit": "ns",
            "range": "± 44075389"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 52100000,
            "unit": "ns",
            "range": "± 47632866"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 67800000,
            "unit": "ns",
            "range": "± 28212763"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 59800000,
            "unit": "ns",
            "range": "± 39086570"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 51700000,
            "unit": "ns",
            "range": "± 38592874"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 72800000,
            "unit": "ns",
            "range": "± 39798994"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 52300000,
            "unit": "ns",
            "range": "± 38504675"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 67500000,
            "unit": "ns",
            "range": "± 29790099"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 48200000,
            "unit": "ns",
            "range": "± 28627958"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 62200000,
            "unit": "ns",
            "range": "± 36358767"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 71800000,
            "unit": "ns",
            "range": "± 36790759"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 57700000,
            "unit": "ns",
            "range": "± 20312803"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 49800000,
            "unit": "ns",
            "range": "± 25658526"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 61600000,
            "unit": "ns",
            "range": "± 24719223"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 36700000,
            "unit": "ns",
            "range": "± 17412926"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 52400000,
            "unit": "ns",
            "range": "± 30770765"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 58800000,
            "unit": "ns",
            "range": "± 24894979"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 60900000,
            "unit": "ns",
            "range": "± 32216300"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 61700000,
            "unit": "ns",
            "range": "± 32006405"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 49500000,
            "unit": "ns",
            "range": "± 17454225"
          },
          {
            "name": "pallet-usage - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 45000000,
            "unit": "ns",
            "range": "± 22772790"
          },
          {
            "name": "pallet-usage - tests::dust_discarded_with_noop",
            "value": 41500000,
            "unit": "ns",
            "range": "± 16249615"
          },
          {
            "name": "pallet-usage - tests::external_submitter_gets_rewarded",
            "value": 44300000,
            "unit": "ns",
            "range": "± 18687161"
          },
          {
            "name": "pallet-usage - tests::gas_properly_handled_for_trap_replies",
            "value": 38400000,
            "unit": "ns",
            "range": "± 16584329"
          },
          {
            "name": "pallet-usage - tests::ocw_double_charge",
            "value": 42500000,
            "unit": "ns",
            "range": "± 15768639"
          },
          {
            "name": "pallet-usage - tests::ocw_interval_maintained",
            "value": 38400000,
            "unit": "ns",
            "range": "± 17771887"
          },
          {
            "name": "pallet-usage - tests::ocw_interval_stretches_for_large_wait_list",
            "value": 42400000,
            "unit": "ns",
            "range": "± 14582180"
          },
          {
            "name": "pallet-usage - tests::ocw_overlapping_prevented",
            "value": 38100000,
            "unit": "ns",
            "range": "± 23394230"
          },
          {
            "name": "pallet-usage - tests::rent_charge_works",
            "value": 33200000,
            "unit": "ns",
            "range": "± 11178550"
          },
          {
            "name": "pallet-usage - tests::trap_reply_message_is_sent",
            "value": 39500000,
            "unit": "ns",
            "range": "± 14941552"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "f7ed4ccfed64474d5b5e39b0f499013cf2621704",
          "message": "Fix clippy warnings",
          "timestamp": "2022-07-11T17:18:31Z",
          "url": "https://github.com/gear-tech/gear/commit/f7ed4ccfed64474d5b5e39b0f499013cf2621704"
        },
        "date": 1657561102592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 13087800000,
            "unit": "ns",
            "range": "± 29111073054"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 96600000,
            "unit": "ns",
            "range": "± 100618288"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 55200000,
            "unit": "ns",
            "range": "± 46939961"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 75100000,
            "unit": "ns",
            "range": "± 63337903"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 192400000,
            "unit": "ns",
            "range": "± 94657487"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 98300000,
            "unit": "ns",
            "range": "± 62384373"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 88800000,
            "unit": "ns",
            "range": "± 46274831"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 104100000,
            "unit": "ns",
            "range": "± 86226967"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 118000000,
            "unit": "ns",
            "range": "± 89381206"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 559400000,
            "unit": "ns",
            "range": "± 192292589"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 78700000,
            "unit": "ns",
            "range": "± 38382417"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 87700000,
            "unit": "ns",
            "range": "± 49821782"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 76600000,
            "unit": "ns",
            "range": "± 46221639"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 176900000,
            "unit": "ns",
            "range": "± 112730164"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 82200000,
            "unit": "ns",
            "range": "± 46707172"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 111500000,
            "unit": "ns",
            "range": "± 65792476"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 128300000,
            "unit": "ns",
            "range": "± 103135881"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 120500000,
            "unit": "ns",
            "range": "± 84900235"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 87000000,
            "unit": "ns",
            "range": "± 58273493"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 69400000,
            "unit": "ns",
            "range": "± 43607797"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 87200000,
            "unit": "ns",
            "range": "± 50873961"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 126100000,
            "unit": "ns",
            "range": "± 91904787"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 121000000,
            "unit": "ns",
            "range": "± 80877685"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 138800000,
            "unit": "ns",
            "range": "± 108447037"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 174500000,
            "unit": "ns",
            "range": "± 128061899"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 93900000,
            "unit": "ns",
            "range": "± 53376867"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 201500000,
            "unit": "ns",
            "range": "± 141163911"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 145700000,
            "unit": "ns",
            "range": "± 109838108"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 112700000,
            "unit": "ns",
            "range": "± 87931848"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 166800000,
            "unit": "ns",
            "range": "± 101805500"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 130900000,
            "unit": "ns",
            "range": "± 80358509"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 144700000,
            "unit": "ns",
            "range": "± 119499832"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 140600000,
            "unit": "ns",
            "range": "± 115152247"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 103100000,
            "unit": "ns",
            "range": "± 62078095"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 126700000,
            "unit": "ns",
            "range": "± 58060399"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 102400000,
            "unit": "ns",
            "range": "± 53686497"
          },
          {
            "name": "pallet-gear - tests::submit_program_expected_failure",
            "value": 97300000,
            "unit": "ns",
            "range": "± 34240473"
          },
          {
            "name": "pallet-gear - tests::submit_program_fails_on_duplicate_id",
            "value": 87000000,
            "unit": "ns",
            "range": "± 51468436"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 386000000,
            "unit": "ns",
            "range": "± 121012396"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 113000000,
            "unit": "ns",
            "range": "± 70295092"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 115700000,
            "unit": "ns",
            "range": "± 88950604"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 129100000,
            "unit": "ns",
            "range": "± 111099459"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 141900000,
            "unit": "ns",
            "range": "± 63866188"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 101600000,
            "unit": "ns",
            "range": "± 45239805"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 146400000,
            "unit": "ns",
            "range": "± 74276779"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 203400000,
            "unit": "ns",
            "range": "± 80127648"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 118800000,
            "unit": "ns",
            "range": "± 42534221"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 151800000,
            "unit": "ns",
            "range": "± 87792710"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 134800000,
            "unit": "ns",
            "range": "± 104671677"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 110400000,
            "unit": "ns",
            "range": "± 82815698"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 111700000,
            "unit": "ns",
            "range": "± 55501441"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 119700000,
            "unit": "ns",
            "range": "± 66190709"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 163500000,
            "unit": "ns",
            "range": "± 127101730"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 210600000,
            "unit": "ns",
            "range": "± 84744557"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 129400000,
            "unit": "ns",
            "range": "± 90776869"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 142300000,
            "unit": "ns",
            "range": "± 90775602"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 120300000,
            "unit": "ns",
            "range": "± 69596048"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 156900000,
            "unit": "ns",
            "range": "± 66318097"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 111500000,
            "unit": "ns",
            "range": "± 101922764"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 107000000,
            "unit": "ns",
            "range": "± 73722452"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 127000000,
            "unit": "ns",
            "range": "± 94605496"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 174100000,
            "unit": "ns",
            "range": "± 105058507"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 131100000,
            "unit": "ns",
            "range": "± 88363397"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 114600000,
            "unit": "ns",
            "range": "± 87266488"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 127200000,
            "unit": "ns",
            "range": "± 81669823"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 111000000,
            "unit": "ns",
            "range": "± 61655494"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 107700000,
            "unit": "ns",
            "range": "± 80031306"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 114500000,
            "unit": "ns",
            "range": "± 68555452"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 122300000,
            "unit": "ns",
            "range": "± 73989255"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 105500000,
            "unit": "ns",
            "range": "± 64175150"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 102600000,
            "unit": "ns",
            "range": "± 53333291"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree",
            "value": 133900000,
            "unit": "ns",
            "range": "± 98043306"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 131400000,
            "unit": "ns",
            "range": "± 74783955"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 104300000,
            "unit": "ns",
            "range": "± 82616039"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure",
            "value": 112700000,
            "unit": "ns",
            "range": "± 103105819"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 98000000,
            "unit": "ns",
            "range": "± 65010768"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 120900000,
            "unit": "ns",
            "range": "± 74661167"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 83900000,
            "unit": "ns",
            "range": "± 55318080"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 119900000,
            "unit": "ns",
            "range": "± 101689183"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 140500000,
            "unit": "ns",
            "range": "± 101771557"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 128800000,
            "unit": "ns",
            "range": "± 95741109"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 141600000,
            "unit": "ns",
            "range": "± 104931596"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 156100000,
            "unit": "ns",
            "range": "± 110211115"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 129800000,
            "unit": "ns",
            "range": "± 101475908"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 104000000,
            "unit": "ns",
            "range": "± 62345809"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 118400000,
            "unit": "ns",
            "range": "± 103988653"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 128900000,
            "unit": "ns",
            "range": "± 98766846"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 144100000,
            "unit": "ns",
            "range": "± 78982846"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 115000000,
            "unit": "ns",
            "range": "± 68051451"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 131100000,
            "unit": "ns",
            "range": "± 100614561"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 98400000,
            "unit": "ns",
            "range": "± 63079632"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 101300000,
            "unit": "ns",
            "range": "± 76410797"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 120100000,
            "unit": "ns",
            "range": "± 66458182"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 120700000,
            "unit": "ns",
            "range": "± 84641656"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 82200000,
            "unit": "ns",
            "range": "± 27607245"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 97500000,
            "unit": "ns",
            "range": "± 63926911"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 126200000,
            "unit": "ns",
            "range": "± 75203457"
          },
          {
            "name": "pallet-usage - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 136500000,
            "unit": "ns",
            "range": "± 80700991"
          },
          {
            "name": "pallet-usage - tests::dust_discarded_with_noop",
            "value": 125200000,
            "unit": "ns",
            "range": "± 64511704"
          },
          {
            "name": "pallet-usage - tests::external_submitter_gets_rewarded",
            "value": 120200000,
            "unit": "ns",
            "range": "± 89326143"
          },
          {
            "name": "pallet-usage - tests::gas_properly_handled_for_trap_replies",
            "value": 130700000,
            "unit": "ns",
            "range": "± 84110700"
          },
          {
            "name": "pallet-usage - tests::ocw_double_charge",
            "value": 102800000,
            "unit": "ns",
            "range": "± 65746178"
          },
          {
            "name": "pallet-usage - tests::ocw_interval_maintained",
            "value": 92100000,
            "unit": "ns",
            "range": "± 65905159"
          },
          {
            "name": "pallet-usage - tests::ocw_interval_stretches_for_large_wait_list",
            "value": 101400000,
            "unit": "ns",
            "range": "± 81118678"
          },
          {
            "name": "pallet-usage - tests::ocw_overlapping_prevented",
            "value": 87300000,
            "unit": "ns",
            "range": "± 57586543"
          },
          {
            "name": "pallet-usage - tests::rent_charge_works",
            "value": 101200000,
            "unit": "ns",
            "range": "± 82288273"
          },
          {
            "name": "pallet-usage - tests::trap_reply_message_is_sent",
            "value": 104100000,
            "unit": "ns",
            "range": "± 69886264"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "6f075c82f70bc0c93bf2a70854e5436522fd6861",
          "message": "Run test measurements on Xeon instance",
          "timestamp": "2022-07-11T17:48:29Z",
          "url": "https://github.com/gear-tech/gear/commit/6f075c82f70bc0c93bf2a70854e5436522fd6861"
        },
        "date": 1657563695367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Total time",
            "value": 17297000000,
            "unit": "ns",
            "range": "± 43696685659"
          },
          {
            "name": "pallet-gear - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 33500000,
            "unit": "ns",
            "range": "± 12816005"
          },
          {
            "name": "pallet-gear - schedule::test::print_test_schedule",
            "value": 43500000,
            "unit": "ns",
            "range": "± 22615260"
          },
          {
            "name": "pallet-gear - tests::call_forbidden_function",
            "value": 51500000,
            "unit": "ns",
            "range": "± 19810350"
          },
          {
            "name": "pallet-gear - tests::cascading_messages_with_value_do_not_overcharge",
            "value": 231300000,
            "unit": "ns",
            "range": "± 53900000"
          },
          {
            "name": "pallet-gear - tests::defer_program_initialization",
            "value": 102400000,
            "unit": "ns",
            "range": "± 23388886"
          },
          {
            "name": "pallet-gear - tests::distributor_distribute",
            "value": 65400000,
            "unit": "ns",
            "range": "± 19975985"
          },
          {
            "name": "pallet-gear - tests::distributor_initialize",
            "value": 63300000,
            "unit": "ns",
            "range": "± 30318476"
          },
          {
            "name": "pallet-gear - tests::events_logging_works",
            "value": 74900000,
            "unit": "ns",
            "range": "± 25727222"
          },
          {
            "name": "pallet-gear - tests::execution_over_blocks",
            "value": 882200000,
            "unit": "ns",
            "range": "± 108052579"
          },
          {
            "name": "pallet-gear - tests::exit_handle",
            "value": 80800000,
            "unit": "ns",
            "range": "± 41177178"
          },
          {
            "name": "pallet-gear - tests::exit_init",
            "value": 89400000,
            "unit": "ns",
            "range": "± 17973313"
          },
          {
            "name": "pallet-gear - tests::gas_spent_precalculated",
            "value": 83200000,
            "unit": "ns",
            "range": "± 39811556"
          },
          {
            "name": "pallet-gear - tests::gas_spent_vs_balance",
            "value": 161300000,
            "unit": "ns",
            "range": "± 38450097"
          },
          {
            "name": "pallet-gear - tests::init_message_logging_works",
            "value": 75000000,
            "unit": "ns",
            "range": "± 22578751"
          },
          {
            "name": "pallet-gear - tests::init_wait_reply_exit_cleaned_storage",
            "value": 132800000,
            "unit": "ns",
            "range": "± 45630691"
          },
          {
            "name": "pallet-gear - tests::lazy_pages",
            "value": 85800000,
            "unit": "ns",
            "range": "± 15509996"
          },
          {
            "name": "pallet-gear - tests::mailbox_threshold_works",
            "value": 120900000,
            "unit": "ns",
            "range": "± 35401836"
          },
          {
            "name": "pallet-gear - tests::mailbox_works",
            "value": 59500000,
            "unit": "ns",
            "range": "± 13872634"
          },
          {
            "name": "pallet-gear - tests::memory_access_cases",
            "value": 90100000,
            "unit": "ns",
            "range": "± 37447162"
          },
          {
            "name": "pallet-gear - tests::messages_processing_works",
            "value": 77600000,
            "unit": "ns",
            "range": "± 13770983"
          },
          {
            "name": "pallet-gear - tests::messages_to_paused_program_skipped",
            "value": 79100000,
            "unit": "ns",
            "range": "± 25703890"
          },
          {
            "name": "pallet-gear - tests::messages_to_uninitialized_program_wait",
            "value": 78600000,
            "unit": "ns",
            "range": "± 22685678"
          },
          {
            "name": "pallet-gear - tests::no_redundant_gas_value_after_exiting",
            "value": 69700000,
            "unit": "ns",
            "range": "± 23008911"
          },
          {
            "name": "pallet-gear - tests::paused_program_keeps_id",
            "value": 90400000,
            "unit": "ns",
            "range": "± 30411182"
          },
          {
            "name": "pallet-gear - tests::program_lifecycle_works",
            "value": 82700000,
            "unit": "ns",
            "range": "± 32425452"
          },
          {
            "name": "pallet-gear - tests::program_messages_to_paused_program_skipped",
            "value": 125300000,
            "unit": "ns",
            "range": "± 39847333"
          },
          {
            "name": "pallet-gear - tests::replies_to_paused_program_skipped",
            "value": 71400000,
            "unit": "ns",
            "range": "± 30774015"
          },
          {
            "name": "pallet-gear - tests::restrict_start_section",
            "value": 62200000,
            "unit": "ns",
            "range": "± 19369047"
          },
          {
            "name": "pallet-gear - tests::resume_program_works",
            "value": 98200000,
            "unit": "ns",
            "range": "± 46289955"
          },
          {
            "name": "pallet-gear - tests::send_message_expected_failure",
            "value": 70700000,
            "unit": "ns",
            "range": "± 24580683"
          },
          {
            "name": "pallet-gear - tests::send_message_works",
            "value": 72100000,
            "unit": "ns",
            "range": "± 23304291"
          },
          {
            "name": "pallet-gear - tests::send_reply_failure_to_claim_from_mailbox",
            "value": 64100000,
            "unit": "ns",
            "range": "± 19669519"
          },
          {
            "name": "pallet-gear - tests::send_reply_value_claiming_works",
            "value": 77800000,
            "unit": "ns",
            "range": "± 37048076"
          },
          {
            "name": "pallet-gear - tests::send_reply_works",
            "value": 64900000,
            "unit": "ns",
            "range": "± 18641083"
          },
          {
            "name": "pallet-gear - tests::spent_gas_to_reward_block_author_works",
            "value": 66200000,
            "unit": "ns",
            "range": "± 28378865"
          },
          {
            "name": "pallet-gear - tests::submit_program_expected_failure",
            "value": 50500000,
            "unit": "ns",
            "range": "± 19080094"
          },
          {
            "name": "pallet-gear - tests::submit_program_fails_on_duplicate_id",
            "value": 67400000,
            "unit": "ns",
            "range": "± 22782449"
          },
          {
            "name": "pallet-gear - tests::test_async_messages",
            "value": 465300000,
            "unit": "ns",
            "range": "± 55860630"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_reset_within_program_submission",
            "value": 66400000,
            "unit": "ns",
            "range": "± 36859734"
          },
          {
            "name": "pallet-gear - tests::test_code_is_not_submitted_twice_after_program_submission",
            "value": 51100000,
            "unit": "ns",
            "range": "± 30774827"
          },
          {
            "name": "pallet-gear - tests::test_code_submission_pass",
            "value": 59300000,
            "unit": "ns",
            "range": "± 16510905"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate",
            "value": 102600000,
            "unit": "ns",
            "range": "± 40603448"
          },
          {
            "name": "pallet-gear - tests::test_create_program_duplicate_in_one_execution",
            "value": 79300000,
            "unit": "ns",
            "range": "± 18767258"
          },
          {
            "name": "pallet-gear - tests::test_create_program_miscellaneous",
            "value": 109600000,
            "unit": "ns",
            "range": "± 24017493"
          },
          {
            "name": "pallet-gear - tests::test_create_program_no_code_hash",
            "value": 213400000,
            "unit": "ns",
            "range": "± 48392561"
          },
          {
            "name": "pallet-gear - tests::test_create_program_simple",
            "value": 131800000,
            "unit": "ns",
            "range": "± 36248586"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_exceeding_value",
            "value": 68600000,
            "unit": "ns",
            "range": "± 24597560"
          },
          {
            "name": "pallet-gear - tests::test_create_program_with_value_lt_ed",
            "value": 110700000,
            "unit": "ns",
            "range": "± 13907192"
          },
          {
            "name": "pallet-gear - tests::test_create_program_without_gas_works",
            "value": 95400000,
            "unit": "ns",
            "range": "± 28831233"
          },
          {
            "name": "pallet-gear - tests::test_message_processing_for_non_existing_destination",
            "value": 57200000,
            "unit": "ns",
            "range": "± 28403520"
          },
          {
            "name": "pallet-gear - tests::test_reply_to_terminated_program",
            "value": 89900000,
            "unit": "ns",
            "range": "± 26879174"
          },
          {
            "name": "pallet-gear - tests::test_same_code_submission_fails",
            "value": 54500000,
            "unit": "ns",
            "range": "± 26093102"
          },
          {
            "name": "pallet-gear - tests::test_two_contracts_composition_works",
            "value": 162300000,
            "unit": "ns",
            "range": "± 40627699"
          },
          {
            "name": "pallet-gear - tests::uninitialized_program_should_accept_replies",
            "value": 84400000,
            "unit": "ns",
            "range": "± 13595587"
          },
          {
            "name": "pallet-gear - tests::unstoppable_block_execution_works",
            "value": 61500000,
            "unit": "ns",
            "range": "± 18331666"
          },
          {
            "name": "pallet-gear - tests::unused_gas_released_back_works",
            "value": 75500000,
            "unit": "ns",
            "range": "± 27306592"
          },
          {
            "name": "pallet-gear - tests::wake_messages_after_program_inited",
            "value": 165600000,
            "unit": "ns",
            "range": "± 38668333"
          },
          {
            "name": "pallet-gear-debug - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 39600000,
            "unit": "ns",
            "range": "± 13417898"
          },
          {
            "name": "pallet-gear-debug - tests::check_changed_pages_in_storage",
            "value": 63700000,
            "unit": "ns",
            "range": "± 17994721"
          },
          {
            "name": "pallet-gear-debug - tests::check_not_allocated_pages",
            "value": 63300000,
            "unit": "ns",
            "range": "± 17555910"
          },
          {
            "name": "pallet-gear-debug - tests::debug_mode_works",
            "value": 68400000,
            "unit": "ns",
            "range": "± 16384138"
          },
          {
            "name": "pallet-gear-gas - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 47000000,
            "unit": "ns",
            "range": "± 25907527"
          },
          {
            "name": "pallet-gear-gas - tests::all_keys_are_cleared",
            "value": 70200000,
            "unit": "ns",
            "range": "± 26289922"
          },
          {
            "name": "pallet-gear-gas - tests::can_cut_nodes",
            "value": 55100000,
            "unit": "ns",
            "range": "± 22232633"
          },
          {
            "name": "pallet-gear-gas - tests::gas_free_after_consumed",
            "value": 61300000,
            "unit": "ns",
            "range": "± 19534840"
          },
          {
            "name": "pallet-gear-gas - tests::limit_vs_origin",
            "value": 55900000,
            "unit": "ns",
            "range": "± 21229460"
          },
          {
            "name": "pallet-gear-gas - tests::long_chain",
            "value": 59900000,
            "unit": "ns",
            "range": "± 22536414"
          },
          {
            "name": "pallet-gear-gas - tests::simple_value_tree",
            "value": 62500000,
            "unit": "ns",
            "range": "± 21148285"
          },
          {
            "name": "pallet-gear-gas - tests::split_with_no_value",
            "value": 64700000,
            "unit": "ns",
            "range": "± 22729056"
          },
          {
            "name": "pallet-gear-gas - tests::splits_fail",
            "value": 56900000,
            "unit": "ns",
            "range": "± 16385664"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree",
            "value": 68600000,
            "unit": "ns",
            "range": "± 26180909"
          },
          {
            "name": "pallet-gear-gas - tests::sub_nodes_tree_with_spends",
            "value": 54400000,
            "unit": "ns",
            "range": "± 19489484"
          },
          {
            "name": "pallet-gear-gas - tests::subtree_gas_limit_remains_intact",
            "value": 60000000,
            "unit": "ns",
            "range": "± 12806248"
          },
          {
            "name": "pallet-gear-gas - tests::test_consume_procedure",
            "value": 51100000,
            "unit": "ns",
            "range": "± 18732058"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_known_errors",
            "value": 47200000,
            "unit": "ns",
            "range": "± 8818163"
          },
          {
            "name": "pallet-gear-gas - tests::value_tree_with_all_kinds_of_nodes",
            "value": 50300000,
            "unit": "ns",
            "range": "± 17129214"
          },
          {
            "name": "pallet-gear-messenger - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 44100000,
            "unit": "ns",
            "range": "± 21741435"
          },
          {
            "name": "pallet-gear-messenger - tests::dequeued_impl_works_manually",
            "value": 45500000,
            "unit": "ns",
            "range": "± 12611502"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_processing_impl_works_manually",
            "value": 48300000,
            "unit": "ns",
            "range": "± 18836400"
          },
          {
            "name": "pallet-gear-messenger - tests::queue_works",
            "value": 51200000,
            "unit": "ns",
            "range": "± 19197916"
          },
          {
            "name": "pallet-gear-messenger - tests::sent_impl_works",
            "value": 50000000,
            "unit": "ns",
            "range": "± 16492422"
          },
          {
            "name": "pallet-gear-payment - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 33100000,
            "unit": "ns",
            "range": "± 14487580"
          },
          {
            "name": "pallet-gear-payment - tests::custom_fee_multiplier_updated_per_block",
            "value": 52100000,
            "unit": "ns",
            "range": "± 14720394"
          },
          {
            "name": "pallet-gear-payment - tests::fee_rounding_error_bounded_by_multiplier",
            "value": 47000000,
            "unit": "ns",
            "range": "± 15440207"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_affecting_fee_works",
            "value": 47200000,
            "unit": "ns",
            "range": "± 18840382"
          },
          {
            "name": "pallet-gear-payment - tests::mq_size_not_affecting_fee_works",
            "value": 43600000,
            "unit": "ns",
            "range": "± 18499729"
          },
          {
            "name": "pallet-gear-payment - tests::query_info_and_fee_details_work",
            "value": 54400000,
            "unit": "ns",
            "range": "± 18521339"
          },
          {
            "name": "pallet-gear-program - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 36100000,
            "unit": "ns",
            "range": "± 18239791"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_twice_fails",
            "value": 51100000,
            "unit": "ns",
            "range": "± 14390621"
          },
          {
            "name": "pallet-gear-program - tests::pause_program_works",
            "value": 58100000,
            "unit": "ns",
            "range": "± 13382451"
          },
          {
            "name": "pallet-gear-program - tests::pause_terminated_program_fails",
            "value": 44600000,
            "unit": "ns",
            "range": "± 14561593"
          },
          {
            "name": "pallet-gear-program - tests::pause_uninitialized_program_works",
            "value": 60000000,
            "unit": "ns",
            "range": "± 21255587"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_twice_fails",
            "value": 76600000,
            "unit": "ns",
            "range": "± 14022838"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_list_fails",
            "value": 62700000,
            "unit": "ns",
            "range": "± 15356106"
          },
          {
            "name": "pallet-gear-program - tests::resume_program_wrong_memory_fails",
            "value": 65100000,
            "unit": "ns",
            "range": "± 21106634"
          },
          {
            "name": "pallet-gear-program - tests::resume_uninitialized_program_works",
            "value": 66900000,
            "unit": "ns",
            "range": "± 18305463"
          },
          {
            "name": "pallet-usage - mock::__construct_runtime_integrity_test::runtime_integrity_tests",
            "value": 37500000,
            "unit": "ns",
            "range": "± 18693581"
          },
          {
            "name": "pallet-usage - tests::dust_discarded_with_noop",
            "value": 47800000,
            "unit": "ns",
            "range": "± 15714961"
          },
          {
            "name": "pallet-usage - tests::external_submitter_gets_rewarded",
            "value": 52500000,
            "unit": "ns",
            "range": "± 25640787"
          },
          {
            "name": "pallet-usage - tests::gas_properly_handled_for_trap_replies",
            "value": 47900000,
            "unit": "ns",
            "range": "± 21556669"
          },
          {
            "name": "pallet-usage - tests::ocw_double_charge",
            "value": 47800000,
            "unit": "ns",
            "range": "± 23142169"
          },
          {
            "name": "pallet-usage - tests::ocw_interval_maintained",
            "value": 38700000,
            "unit": "ns",
            "range": "± 24511425"
          },
          {
            "name": "pallet-usage - tests::ocw_interval_stretches_for_large_wait_list",
            "value": 49500000,
            "unit": "ns",
            "range": "± 10519030"
          },
          {
            "name": "pallet-usage - tests::ocw_overlapping_prevented",
            "value": 40900000,
            "unit": "ns",
            "range": "± 13003461"
          },
          {
            "name": "pallet-usage - tests::rent_charge_works",
            "value": 52500000,
            "unit": "ns",
            "range": "± 18034688"
          },
          {
            "name": "pallet-usage - tests::trap_reply_message_is_sent",
            "value": 45800000,
            "unit": "ns",
            "range": "± 15236797"
          }
        ]
      }
    ],
    "Node runtime tests": [
      {
        "commit": {
          "author": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "committer": {
            "name": "Arsenii Lyashenko",
            "username": "ark0f",
            "email": "arsenylyashenko.3@gmail.com"
          },
          "id": "6f075c82f70bc0c93bf2a70854e5436522fd6861",
          "message": "Run test measurements on Xeon instance",
          "timestamp": "2022-07-11T17:48:29Z",
          "url": "https://github.com/gear-tech/gear/commit/6f075c82f70bc0c93bf2a70854e5436522fd6861"
        },
        "date": 1657563697429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Async RwLock - check readers",
            "value": 50079048,
            "unit": "ns",
            "range": "± 27150729"
          },
          {
            "name": "Async RwLock - forever lock",
            "value": 62403209,
            "unit": "ns",
            "range": "± 25942117"
          },
          {
            "name": "Async RwLock - read while writing",
            "value": 102923028,
            "unit": "ns",
            "range": "± 31094907"
          },
          {
            "name": "Async RwLock - rwlock wide",
            "value": 181170854,
            "unit": "ns",
            "range": "± 24545130"
          },
          {
            "name": "Async RwLock - write while reading",
            "value": 121838423,
            "unit": "ns",
            "range": "± 29990696"
          },
          {
            "name": "Async init - approved pong",
            "value": 15848381976,
            "unit": "ns",
            "range": "± 200945521"
          },
          {
            "name": "Async-await - async-await",
            "value": 216549809,
            "unit": "ns",
            "range": "± 10751827"
          },
          {
            "name": "Async-await - mutex",
            "value": 200990337,
            "unit": "ns",
            "range": "± 20693538"
          },
          {
            "name": "Async-await - rwlock-write",
            "value": 176639646,
            "unit": "ns",
            "range": "± 39650151"
          },
          {
            "name": "Async-duplicates-sync - async-duplicates-sync",
            "value": 114383652,
            "unit": "ns",
            "range": "± 20262289"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; eve doesn't answer, alice replies with incorrect payload",
            "value": 8188124309,
            "unit": "ns",
            "range": "± 124539294"
          },
          {
            "name": "Async-multisig (well known cases) - 2 of 3; no replies",
            "value": 7954989586,
            "unit": "ns",
            "range": "± 123238870"
          },
          {
            "name": "Async-multisig (well known cases) - Single signatory & zero threshold",
            "value": 8091681540,
            "unit": "ns",
            "range": "± 102620055"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Bob replies with incorrect signature",
            "value": 8089257173,
            "unit": "ns",
            "range": "± 109583838"
          },
          {
            "name": "Async-multisig (well known cases) - Three signatories; Eve doesn't answer, Alice replies with incorrect payload",
            "value": 8107968902,
            "unit": "ns",
            "range": "± 128493846"
          },
          {
            "name": "Async-sign (well known cases) - bad signature",
            "value": 4245128937,
            "unit": "ns",
            "range": "± 127314542"
          },
          {
            "name": "Async-sign (well known cases) - correct signature but for another message",
            "value": 4338961717,
            "unit": "ns",
            "range": "± 86576218"
          },
          {
            "name": "Async-sign (well known cases) - no reply",
            "value": 4180759399,
            "unit": "ns",
            "range": "± 144735450"
          },
          {
            "name": "Async-sign (well known cases) - signed message",
            "value": 4322766401,
            "unit": "ns",
            "range": "± 119237909"
          },
          {
            "name": "Asynchronous recursion - async-recursion",
            "value": 496855236,
            "unit": "ns",
            "range": "± 43295081"
          },
          {
            "name": "Basic capacitor check - Test charging/discharging",
            "value": 69423970,
            "unit": "ns",
            "range": "± 16685003"
          },
          {
            "name": "Chat - chat",
            "value": 123401091,
            "unit": "ns",
            "range": "± 31174146"
          },
          {
            "name": "Decoder - decoder",
            "value": 51752334,
            "unit": "ns",
            "range": "± 18999663"
          },
          {
            "name": "Exit code - normal",
            "value": 67694797,
            "unit": "ns",
            "range": "± 8336006"
          },
          {
            "name": "Exit code - panic",
            "value": 56026722,
            "unit": "ns",
            "range": "± 17802021"
          },
          {
            "name": "Futures-unordered - futures-unordered",
            "value": 230270642,
            "unit": "ns",
            "range": "± 29988671"
          },
          {
            "name": "Futures-unordered - join",
            "value": 189180993,
            "unit": "ns",
            "range": "± 43934145"
          },
          {
            "name": "Futures-unordered - select",
            "value": 190815739,
            "unit": "ns",
            "range": "± 49495825"
          },
          {
            "name": "Incomplete-async-payloads - incomplete-async-payloads",
            "value": 203763348,
            "unit": "ns",
            "range": "± 20408355"
          },
          {
            "name": "Memory test - Test for memory result",
            "value": 68621137,
            "unit": "ns",
            "range": "± 6953878"
          },
          {
            "name": "Messages to failed program are handled properly - handle messages to failed program",
            "value": 66321139,
            "unit": "ns",
            "range": "± 27698387"
          },
          {
            "name": "Meta ping (simple check) - meta check",
            "value": 14745884661,
            "unit": "ns",
            "range": "± 108601395"
          },
          {
            "name": "Multiping - multiping",
            "value": 49573815,
            "unit": "ns",
            "range": "± 16362465"
          },
          {
            "name": "Ping-pong - ping-pong",
            "value": 35724903,
            "unit": "ns",
            "range": "± 21471164"
          },
          {
            "name": "Ping-pong - ping-pong wgas",
            "value": 39933551,
            "unit": "ns",
            "range": "± 16496118"
          },
          {
            "name": "Program generator - program_generator",
            "value": 44422683,
            "unit": "ns",
            "range": "± 2589045"
          },
          {
            "name": "Program_id test - program_id",
            "value": 45244978,
            "unit": "ns",
            "range": "± 15116102"
          },
          {
            "name": "State-rollback - state-rollback",
            "value": 55896380,
            "unit": "ns",
            "range": "± 15991360"
          },
          {
            "name": "State-rollback - state-saving",
            "value": 46487038,
            "unit": "ns",
            "range": "± 18281619"
          },
          {
            "name": "Test create_program sys-call - Simple creation of program from program",
            "value": 60215146,
            "unit": "ns",
            "range": "± 13053239"
          },
          {
            "name": "Test create_program sys-call - Try to re-init existing program",
            "value": 64737871,
            "unit": "ns",
            "range": "± 21254966"
          },
          {
            "name": "Total time",
            "value": 110116956695,
            "unit": "ns",
            "range": "± 497187514"
          },
          {
            "name": "Trap test - Test for trap result",
            "value": 18366273,
            "unit": "ns",
            "range": "± 10255561"
          },
          {
            "name": "Vector - test-vec (2 * 65536 * size_of(u8) = 128 KiB = 2 pages)",
            "value": 150614104,
            "unit": "ns",
            "range": "± 30787917"
          },
          {
            "name": "Wait test - wait",
            "value": 49765034,
            "unit": "ns",
            "range": "± 12161928"
          },
          {
            "name": "basic - fibonacci-sum",
            "value": 95594345,
            "unit": "ns",
            "range": "± 16650243"
          },
          {
            "name": "collector-1 - collector pass 2 messages",
            "value": 87431999,
            "unit": "ns",
            "range": "± 8694958"
          },
          {
            "name": "guestbook test - guestbook",
            "value": 7792493967,
            "unit": "ns",
            "range": "± 85736951"
          },
          {
            "name": "gui test - gui",
            "value": 10325444834,
            "unit": "ns",
            "range": "± 113150863"
          }
        ]
      }
    ]
  }
}